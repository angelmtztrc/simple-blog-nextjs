import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';

// Syntax Highlighter
export type HighlighterProps = {
  language: string;
  value: React.ReactNode;
};
const renderers = {
  code: ({ language, value }: HighlighterProps) => {
    return <SyntaxHighlighter style={dracula} language={language} children={value} />;
  }
};

// Markdown Render
export type MarkdownProps = {
  content: string;
};

const Markdown = ({ content }: MarkdownProps) => {
  return <ReactMarkdown renderers={renderers} children={content} />;
};

export default Markdown;
