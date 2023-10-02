import React from 'react'
import Text from './Text'
import MarkdownArea from './Markdown'

const Content = () => {
    return (
        <div>

            <div className="main-content">

                <header>
                    <h1 className="app-title">Markdown Previewer</h1>
                </header>

                <div className="text-panels">
                    <Text />
                    <MarkdownArea />
                </div>

                <div />
            </div>

        </div>
    )
}

export default Content