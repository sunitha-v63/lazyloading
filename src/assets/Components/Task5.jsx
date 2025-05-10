import React, { Suspense } from 'react';

const Content = React.lazy(() => import('./Content'));
function Task5() {
    return (
        <div>
            <Suspense fallback={<div>Loading Footer...</div>}>
                <Content />
            </Suspense>
        </div>

    )
}

export default Task5