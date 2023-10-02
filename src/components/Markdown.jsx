import React from 'react'
import { useSelector } from 'react-redux'
import { textState } from '../redux/slice/markdown.slice'
import Markdown from 'marked-react';

const MarkdownArea = () => {
    const markdownText = useSelector(textState);

    return (
        <div style={{ width: "45%" }}>
            <p>Markdown Area</p>
            <div className="text-panel-right">
                <Markdown>
                    {markdownText}
                </Markdown>
            </div>
        </div>
    )
}

export default MarkdownArea