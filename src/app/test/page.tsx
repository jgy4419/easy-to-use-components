// src/app/test/page.tsx
import { get } from '@vercel/edge-config';

export default async function TestPage() {
    const greeting = await get('components');

    return (
        <>
            {/*<h1>{greeting.menu[0].menu1.test || 'No greeting found'}</h1>;*/}
        </>
    )
}
