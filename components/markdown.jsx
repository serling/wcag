import { useMemo } from 'react';
import { MDXRemote } from 'next-mdx-remote';

import Button from '/components/button';
import Header from '/components/header';

const components = {
    Button,
    h1: props => <Header level={1} {...props} />
};

const Markdown = ({ md }) => {
    return (
        <>
            <div className="markdown">
                {useMemo(
                    () => (
                        <MDXRemote {...md} components={components} />
                    ),
                    [md]
                )}
            </div>
            <style jsx global>{`
                .markdown p {
                    margin: 1rem 0;
                }
            `}</style>
        </>
    );
};

export default Markdown;
