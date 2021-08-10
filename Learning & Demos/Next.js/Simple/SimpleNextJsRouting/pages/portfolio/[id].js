import React from 'react';
import { useRouter } from 'next/router'

function PortfolioProjectPage(props) {
    const router = useRouter()

    return (
        <div>
            <h1>project {router.query.id}</h1>
        </div>
    );
}

export default PortfolioProjectPage;