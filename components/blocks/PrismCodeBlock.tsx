import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";

interface CodeBlockProps {
  lang?: string;
  value: string;
}

export const PrismCodeBlock: React.FC<CodeBlockProps> = ({
  lang = "javascript",
  value = "",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Map common language aliases to their proper names
  const getLanguage = (language: string) => {
    const languageMap: Record<string, string> = {
      js: "javascript",
      jsx: "jsx",
      ts: "typescript",
      tsx: "tsx",
      json: "json",
      md: "markdown",
      mdx: "markdown",
      html: "html",
      css: "css",
      yml: "yaml",
      yaml: "yaml",
      bash: "bash",
      sh: "bash",
      shell: "bash",
      py: "python",
      python: "python",
      rb: "ruby",
      ruby: "ruby",
      go: "go",
      rust: "rust",
      php: "php",
      java: "java",
      c: "c",
      cpp: "cpp",
      csharp: "csharp",
      cs: "csharp",
      swift: "swift",
      kotlin: "kotlin",
      scala: "scala",
      haskell: "haskell",
      graphql: "graphql",
      sql: "sql",
    };

    return languageMap[language.toLowerCase()] || language;
  };

  return (
    <div className="relative group mt-6 mb-8">
      <div className="absolute right-2 top-2 z-10 flex gap-2">
        <button
          onClick={handleCopy}
          className="bg-gray-700 hover:bg-gray-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          aria-label="Copy code to clipboard"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <div className="bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 uppercase">
          {lang}
        </div>
      </div>
      <Highlight
        theme={themes.vsDark}
        code={value.trim()}
        language={getLanguage(lang) as any}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} p-4 pt-12 rounded-lg overflow-auto shadow-md font-mono text-sm`}
            style={{
              ...style,
              fontFamily:
                "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
            }}
          >
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({ line, key: i })}
                className="table-row"
              >
                {/* 移除或註解下面這行，即可隱藏行號 */}
                {/* <span className="table-cell text-gray-400 pr-4 select-none text-right text-xs">
                {i + 1}
                </span> */}
                <span className="table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};
