# Building AI Agents: A Comprehensive Guide

*Published: March 25, 2025*

AI agents represent a paradigm shift in how we interact with large language models. Unlike simple prompt-response systems, agents can reason, plan, use tools, and maintain state across multiple interactions. This guide explores the key concepts, architectural patterns, and implementation strategies for building effective AI agents.

## Table of Contents

1. [What is an AI Agent?](#what-is-an-ai-agent)
2. [Core Architectural Patterns](#core-architectural-patterns)
3. [Tool Design and Integration](#tool-design-and-integration)
4. [Memory Systems](#memory-systems)
5. [Implementation Example](#implementation-example)
6. [Production Considerations](#production-considerations)

## What is an AI Agent?

An AI agent is an autonomous system that uses a language model as its reasoning engine to:

- **Perceive** its environment through inputs
- **Reason** about tasks and plan actions
- **Act** by using tools or executing commands
- **Learn** from feedback and maintain context

The key distinction from traditional LLM applications is the **loop**: agents don't just respond once—they iterate until the task is complete.

```
┌─────────────┐
│   Input     │
└──────┬──────┘
       ▼
┌─────────────┐
│   Think     │◄─────┐
└──────┬──────┘      │
       ▼             │
┌─────────────┐      │
│    Act      │      │
└──────┬──────┘      │
       ▼             │
┌─────────────┐      │
│  Observe    │──────┘
└─────────────┘
```

## Core Architectural Patterns

### 1. ReAct (Reasoning + Acting)

ReAct is perhaps the most influential agent pattern. It interleaves reasoning traces with action execution:

```python
class ReActAgent:
    def run(self, query: str, max_steps: int = 10) -> str:
        context = f"Question: {query}\n"
        
        for step in range(max_steps):
            # Thought: Reason about what to do
            thought = self.llm.predict(
                f"{context}\nThought: ",
                stop=["Action:"]
            )
            context += f"Thought: {thought}\n"
            
            # Action: Decide what action to take
            action_str = self.llm.predict(
                f"{context}Action: ",
                stop=["Observation:"]
            )
            
            if "Final Answer" in action_str:
                return action_str.split(":", 1)[1].strip()
            
            # Execute action and observe
            action_name, action_input = self.parse_action(action_str)
            observation = self.tools[action_name].run(action_input)
            context += f"Action: {action_str}\nObservation: {observation}\n"
        
        return "Max steps reached"
```

**Key Insight**: By forcing the model to articulate its reasoning ("Thought") before acting, we get better performance and interpretability.

### 2. Plan-and-Execute

For complex multi-step tasks, planning first can be more efficient:

```python
class PlanAndExecuteAgent:
    def run(self, query: str) -> str:
        # Step 1: Create a plan
        plan = self.llm.predict(
            f"Create a step-by-step plan to: {query}\n"
            "Plan:\n1. "
        )
        steps = [s.strip() for s in plan.split("\n") if s.strip()]
        
        # Step 2: Execute each step
        context = ""
        for i, step in enumerate(steps, 1):
            result = self.execute_step(step, context)
            context += f"\nStep {i}: {step}\nResult: {result}"
        
        # Step 3: Synthesize final answer
        return self.llm.predict(
            f"Based on these results, answer the original question:\n"
            f"{context}\n\nFinal Answer: "
        )
```

**When to use**: Complex tasks with clear sub-tasks; when you want to show progress to users.

### 3. Multi-Agent Systems

Sometimes multiple specialized agents work better than one general agent:

```python
class MultiAgentSystem:
    def __init__(self):
        self.researcher = Agent("You are a research specialist...")
        self.coder = Agent("You are a coding expert...")
        self.reviewer = Agent("You are a code reviewer...")
    
    def run(self, task: str) -> str:
        # Research phase
        research = self.researcher.run(f"Research this topic: {task}")
        
        # Coding phase
        code = self.coder.run(f"Implement based on: {research}")
        
        # Review phase
        review = self.reviewer.run(f"Review this code: {code}")
        
        return f"Final code:\n{code}\n\nReview notes:\n{review}"
```

**Benefits**: Specialization, parallelization, and modularity.

## Tool Design and Integration

Tools extend an agent's capabilities beyond text generation. Good tool design is crucial.

### Tool Interface Design

```python
from pydantic import BaseModel, Field
from typing import Callable, Any

class Tool:
    def __init__(
        self,
        name: str,
        description: str,
        func: Callable,
        parameters: dict
    ):
        self.name = name
        self.description = description
        self.func = func
        self.parameters = parameters
    
    def to_openai_schema(self) -> dict:
        """Convert to OpenAI function calling format"""
        return {
            "type": "function",
            "function": {
                "name": self.name,
                "description": self.description,
                "parameters": self.parameters
            }
        }
    
    def run(self, **kwargs) -> str:
        try:
            result = self.func(**kwargs)
            return str(result)
        except Exception as e:
            return f"Error: {str(e)}"

# Example: Web Search Tool
search_tool = Tool(
    name="web_search",
    description="Search the web for information. Use for current events or specific facts.",
    func=lambda query: web_search_function(query),
    parameters={
        "type": "object",
        "properties": {
            "query": {
                "type": "string",
                "description": "The search query"
            }
        },
        "required": ["query"]
    }
)
```

### Tool Selection Strategy

Not every query needs tools. Implement a routing mechanism:

```python
class ToolRouter:
    def __init__(self, tools: list[Tool], llm):
        self.tools = tools
        self.llm = llm
        self.tool_descriptions = self._build_descriptions()
    
    def should_use_tool(self, query: str) -> bool:
        """Determine if any tool is needed"""
        response = self.llm.predict(
            f"Query: {query}\n"
            f"Available tools: {self.tool_descriptions}\n"
            "Does this query require using a tool? (yes/no): "
        )
        return "yes" in response.lower()
    
    def select_tool(self, query: str) -> Tool | None:
        """Select the most appropriate tool"""
        if not self.should_use_tool(query):
            return None
        
        tool_names = ", ".join([t.name for t in self.tools])
        selected = self.llm.predict(
            f"Query: {query}\n"
            f"Available tools: {tool_names}\n"
            "Which tool should be used? (or 'none'): "
        ).strip()
        
        for tool in self.tools:
            if tool.name == selected:
                return tool
        return None
```

## Memory Systems

Agents need memory to maintain context across interactions and learn from past experiences.

### Types of Memory

```python
from dataclasses import dataclass
from datetime import datetime
from typing import List, Optional

@dataclass
class Memory:
    content: str
    timestamp: datetime
    memory_type: str  # "short_term" | "long_term" | "episodic"
    importance: float  # 0-1 score for retention priority

class MemoryManager:
    def __init__(self, max_short_term: int = 10):
        self.short_term: List[Memory] = []
        self.long_term: List[Memory] = []
        self.max_short_term = max_short_term
    
    def add(self, content: str, memory_type: str = "short_term"):
        memory = Memory(
            content=content,
            timestamp=datetime.now(),
            memory_type=memory_type,
            importance=self._calculate_importance(content)
        )
        
        if memory_type == "short_term":
            self.short_term.append(memory)
            if len(self.short_term) > self.max_short_term:
                # Consolidate oldest short-term memories to long-term
                self._consolidate()
        else:
            self.long_term.append(memory)
    
    def retrieve(self, query: str, k: int = 5) -> List[Memory]:
        """Retrieve relevant memories based on query"""
        all_memories = self.short_term + self.long_term
        
        # Simple keyword-based retrieval (replace with embedding similarity)
        scored = [
            (m, self._relevance_score(query, m.content))
            for m in all_memories
        ]
        scored.sort(key=lambda x: x[1], reverse=True)
        
        return [m for m, _ in scored[:k]]
    
    def get_context(self) -> str:
        """Get formatted context for LLM prompt"""
        recent = self.short_term[-3:]  # Last 3 interactions
        return "\n".join([f"- {m.content}" for m in recent])
```

### Memory Consolidation

Long-term memory requires periodic summarization:

```python
async def consolidate_memories(memories: List[Memory], llm) -> Memory:
    """Summarize multiple memories into a consolidated memory"""
    contents = "\n".join([m.content for m in memories])
    
    summary = await llm.apredict(
        f"Summarize these memories concisely:\n{contents}\n\nSummary:"
    )
    
    return Memory(
        content=summary,
        timestamp=datetime.now(),
        memory_type="long_term",
        importance=max(m.importance for m in memories)
    )
```

## Implementation Example

Here's a complete working example of a ReAct agent:

```python
import asyncio
from typing import List, Dict, Callable
from dataclasses import dataclass

@dataclass
class Tool:
    name: str
    description: str
    func: Callable

class SimpleAgent:
    def __init__(self, llm_client):
        self.llm = llm_client
        self.tools: Dict[str, Tool] = {}
        self.tool_history: List[Dict] = []
    
    def register_tool(self, tool: Tool):
        self.tools[tool.name] = tool
    
    async def run(self, query: str, max_iterations: int = 5) -> str:
        prompt = self._build_prompt(query)
        
        for iteration in range(max_iterations):
            # Get model response
            response = await self.llm.complete(prompt)
            
            # Parse thought and action
            thought, action, action_input = self._parse_response(response)
            
            print(f"🤔 Thought: {thought}")
            
            if action == "final_answer":
                return action_input
            
            if action in self.tools:
                print(f"🔧 Action: {action}({action_input})")
                
                # Execute tool
                try:
                    observation = self.tools[action].func(action_input)
                    print(f"📊 Observation: {observation}")
                except Exception as e:
                    observation = f"Error: {str(e)}"
                
                # Update prompt with results
                prompt += f"\nThought: {thought}\n"
                prompt += f"Action: {action}[{action_input}]\n"
                prompt += f"Observation: {observation}\n"
            else:
                prompt += f"\nThought: {thought}\n"
                prompt += f"Invalid action '{action}'. Please use available tools.\n"
        
        return "Maximum iterations reached"
    
    def _build_prompt(self, query: str) -> str:
        tool_desc = "\n".join([
            f"- {name}: {tool.description}"
            for name, tool in self.tools.items()
        ])
        
        return f"""You are a helpful assistant. Answer questions by thinking step by step.

Available tools:
{tool_desc}

Respond in this format:
Thought: <your reasoning>
Action: <tool_name>[<input>]

When you have the final answer, use:
Action: final_answer[<your answer>]

Question: {query}
"""
    
    def _parse_response(self, response: str) -> tuple:
        """Parse thought and action from response"""
        thought = ""
        action = ""
        action_input = ""
        
        for line in response.split("\n"):
            if line.startswith("Thought:"):
                thought = line[8:].strip()
            elif line.startswith("Action:"):
                action_part = line[7:].strip()
                if "[" in action_part and "]" in action_part:
                    action = action_part[:action_part.index("[")].strip()
                    action_input = action_part[action_part.index("[")+1:action_part.index("]")]
        
        return thought, action, action_input

# Usage example
async def main():
    agent = SimpleAgent(llm_client=your_llm_client)
    
    # Register tools
    agent.register_tool(Tool(
        name="calculator",
        description="Perform mathematical calculations",
        func=lambda x: eval(x)  # In production, use safe_eval
    ))
    
    agent.register_tool(Tool(
        name="search",
        description="Search for information",
        func=lambda x: f"Results for: {x}"
    ))
    
    result = await agent.run("What is 25 * 4 + 100?")
    print(f"Final answer: {result}")

if __name__ == "__main__":
    asyncio.run(main())
```

## Production Considerations

### Error Handling

```python
class RobustAgent:
    async def run_with_retry(self, query: str, max_retries: int = 3):
        for attempt in range(max_retries):
            try:
                return await self.run(query)
            except ToolExecutionError as e:
                if attempt < max_retries - 1:
                    await asyncio.sleep(2 ** attempt)  # Exponential backoff
                else:
                    raise
            except LLMError:
                # Fall back to simpler approach
                return await self.run_simple(query)
```

### Observability

```python
from contextlib import contextmanager
import time

@contextmanager
def trace_step(step_name: str):
    start = time.time()
    print(f"▶️ Starting: {step_name}")
    try:
        yield
    finally:
        duration = time.time() - start
        print(f"⏹️ Completed: {step_name} ({duration:.2f}s)")

# Usage
with trace_step("tool_execution"):
    result = await tool.run(input)
```

### Cost Management

```python
class CostTracker:
    def __init__(self):
        self.token_counts = {"input": 0, "output": 0}
        self.tool_calls = 0
    
    def log_llm_call(self, input_tokens: int, output_tokens: int):
        self.token_counts["input"] += input_tokens
        self.token_counts["output"] += output_tokens
    
    def estimate_cost(self) -> float:
        # GPT-4 pricing example
        input_cost = self.token_counts["input"] * 0.03 / 1000
        output_cost = self.token_counts["output"] * 0.06 / 1000
        return input_cost + output_cost
```

### Security

```python
class SecureToolExecutor:
    def __init__(self, allowed_tools: List[str]):
        self.allowed_tools = set(allowed_tools)
    
    def execute(self, tool_name: str, **kwargs):
        if tool_name not in self.allowed_tools:
            raise PermissionError(f"Tool '{tool_name}' not in allowlist")
        
        # Sanitize inputs
        sanitized = self._sanitize(kwargs)
        
        # Execute with timeout
        return self._run_with_timeout(tool_name, sanitized)
    
    def _sanitize(self, inputs: dict) -> dict:
        """Remove potentially dangerous content"""
        dangerous = ["rm", "sudo", "exec", "eval"]
        sanitized = {}
        for k, v in inputs.items():
            if isinstance(v, str):
                v = v.replace(";", "").replace("|", "")
                if any(d in v.lower() for d in dangerous):
                    raise ValueError("Potentially dangerous input detected")
            sanitized[k] = v
        return sanitized
```

## Conclusion

Building effective AI agents requires careful attention to:

1. **Architecture selection**: Choose ReAct for general tasks, Plan-and-Execute for complex multi-step tasks, and Multi-Agent for specialized workflows
2. **Tool design**: Clear interfaces, good documentation, and robust error handling
3. **Memory management**: Balance between context window limits and useful history
4. **Production readiness**: Observability, error handling, cost tracking, and security

The field is evolving rapidly. Stay updated with the latest research and don't hesitate to experiment with hybrid approaches.

---

*Have questions or feedback? Feel free to reach out or open an issue on GitHub.*

## Further Reading

- [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629)
- [LangChain Documentation](https://python.langchain.com/)
- [OpenAI Function Calling Guide](https://platform.openai.com/docs/guides/function-calling)
- [Building LLM Systems](https://www.youtube.com/watch?v=7kDaKkhB0gw) - Andrej Karpathy
