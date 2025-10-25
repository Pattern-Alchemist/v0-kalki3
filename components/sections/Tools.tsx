"use client";
import React from "react";
import Link from "next/link";
import toolsData from "@/content/tools.json";

interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  features: string[];
}

interface ToolsData {
  tools: Tool[];
}

export default function Tools() {
  const { tools } = toolsData as ToolsData;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Premium Karmic Tools
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Unlock the power of your karmic journey with our advanced premium tools
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="bg-card rounded-xl p-6 border border-border hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl">{tool.icon}</div>
              <h2 className="text-2xl font-bold">{tool.name}</h2>
            </div>
            <p className="text-muted-foreground mb-6">{tool.description}</p>
            <ul className="space-y-2 mb-6">
              {tool.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href={`/tools/${tool.id}`}
              className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity block text-center"
            >
              Explore {tool.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
