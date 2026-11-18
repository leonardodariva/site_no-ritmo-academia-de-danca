import { Fragment, type ReactNode } from "react";

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => part.startsWith("**") && part.endsWith("**")
    ? <strong key={`${keyPrefix}-${index}`}>{part.slice(2, -2)}</strong>
    : <Fragment key={`${keyPrefix}-${index}`}>{part}</Fragment>);
}

export default function FaqAnswer({ answer }: { answer: string }) {
  const paragraphs = answer.split(/\n{2,}/).map((part) => part.trim()).filter(Boolean);

  return <>{paragraphs.map((paragraph, index) => {
    const lines = paragraph.split("\n");
    if (lines.length > 1 && lines.every((line) => line.trim().startsWith("- "))) {
      return <ul key={index}>{lines.map((line, lineIndex) => <li key={lineIndex}>{renderInline(line.trim().slice(2), `list-${index}-${lineIndex}`)}</li>)}</ul>;
    }
    return <p key={index}>{lines.map((line, lineIndex) => <Fragment key={lineIndex}>{renderInline(line, `paragraph-${index}-${lineIndex}`)}{lineIndex < lines.length - 1 && <br />}</Fragment>)}</p>;
  })}</>;
}
