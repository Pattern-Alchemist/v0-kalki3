"use client";

import React from "react";
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
            className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="text-4xl">{tool.icon}</div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-2">{tool.name}</h2>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full">
                  {tool.category}
                </span>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4">{tool.description}</p>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-sm uppercase tracking-wide">Features:</h3>
              <ul className="space-y-1">
                {tool.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity">
              Explore {tool.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
