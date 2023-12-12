import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';

interface propsType {
    [propName: string]: any
}

const TILE_SIZE = 16;
const BOARD_WIDTH = 40;
const BOARD_HEIGHT = 30;


const GluttonousSnake = (props: propsType) => {
    const [snake, setSnake] = useState([{ x: 0, y: 0 }]);
    const [food, setFood] = useState({ x: Math.floor(Math.random() * BOARD_WIDTH), y: Math.floor(Math.random() * BOARD_HEIGHT) });
    const [direction, setDirection] = useState('right');
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSnake(snake => {
                const [head] = snake;
                let newHead;
                switch (direction) {
                case 'up':
                    newHead = { x: head.x, y: head.y - 1 };
                    break;
                case 'down':
                    newHead = { x: head.x, y: head.y + 1 };
                    break;
                case 'left':
                    newHead = { x: head.x - 1, y: head.y };
                    break;
                case 'right':
                    newHead = { x: head.x + 1, y: head.y };
                    break;
                default:
                    newHead = { x: head.x, y: head.y };
                }
                if (newHead.x < 0 || newHead.x >= BOARD_WIDTH || newHead.y < 0 || newHead.y >= BOARD_HEIGHT) {
                    clearInterval(intervalId);
                    alert('游戏结束！');
                    return snake;
                }
                if (snake.some(({ x, y }) => x === newHead.x && y === newHead.y)) {
                    clearInterval(intervalId);
                    alert('游戏结束！');
                    return snake;
                }
                const newSnake = [newHead, ...snake.slice(0, -1)];
                    if (newHead.x === food.x && newHead.y === food.y) {
                    setFood({ x: Math.floor(Math.random() * BOARD_WIDTH), y: Math.floor(Math.random() * BOARD_HEIGHT) });
                    return [...newSnake, snake[snake.length - 1]];
                }
                return newSnake;
            });
        }, 100);
        return () => clearInterval(intervalId);
    }, [snake, direction, food]);

    const handleKeyDown = (event) => {
        switch (event.key) {
          case 'ArrowUp':
            if (direction !== 'down') setDirection('up');
            break;
          case 'ArrowDown':
            if (direction !== 'up') setDirection('down');
            break;
          case 'ArrowLeft':
            if (direction !== 'right') setDirection('left');
            break;
          case 'ArrowRight':
            if (direction !== 'left') setDirection('right');
            break;
          default:
            break;
        }
    };

    return (
        <div>
            <h1>贪吃蛇</h1>
            <div id='root' style={{ position: 'relative' }}>
                <div onKeyDown={handleKeyDown} style={{ width: TILE_SIZE * BOARD_WIDTH, height: TILE_SIZE * BOARD_HEIGHT }}>
                    {snake.map(({ x, y }, index) => (
                        <div key={index} style={{ position: 'absolute', left: x * TILE_SIZE, top: y * TILE_SIZE, width: TILE_SIZE, height: TILE_SIZE, backgroundColor: 'lime' }}></div>
                    ))}
                    <div style={{ position: 'absolute', left: food.x * TILE_SIZE, top: food.y * TILE_SIZE, width: TILE_SIZE, height: TILE_SIZE, backgroundColor: 'red' }}></div>
                </div>
            </div>
        </div>
    )
}

export default GluttonousSnake

