import { Button } from '@heroui/react';
import React from 'react';

const HeroPage = () => {
    return (
        <div>
            <h2>Hero Page</h2>
            <Button>Click me</Button>
            <Button variant='secondary'>Click me</Button>
            <Button variant='outline'>Click me</Button>
            <Button variant='ghost'>Click me</Button>
        </div>
    );
};

export default HeroPage;