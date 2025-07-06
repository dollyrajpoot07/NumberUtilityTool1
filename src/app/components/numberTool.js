'use client';

import React, { use, useState } from 'react';
import styles from './numberTool.module.css';

export default function NumberTool() {
    const [input, setInput] = useState('');
    const [operation, setOperation] = useState('');
    const [param, setParam] = useState('');
    const [output, setOutput] = useState('');

    const showParam = ['toFixed', 'random'].includes(operation);

    const handleRun = () => {
        let result = '';
        let num = Number(input);
        try {
            switch (operation) {
                case 'toFixed':
                    result = Number(num).toFixed(Number(param));
                    break;
                case 'parseInt':
                    result = parseInt(input, 10);
                    break;
                case 'parseFloat':
                    result = parseFloat(input);
                    break;
                case 'isNaN':
                    result = isNaN(input).toString();
                    break;
                case 'isFinite':
                    result = isFinite(input).toString();
                    break;
                case 'format':
                    result = Number(input).toLocaleString('en-IN');
                    break;
                case 'floor':
                    result = Math.floor(num);
                    break;
                case 'ceil':
                    result = Math.ceil(num);
                    break;
                case 'round':
                    result = Math.round(num);
                    break;
                case 'random':
                    const max = param ? Number(param) : 100;
                    result = Math.floor(Math.random() * max);
                    break;
                default:
                    result = 'Please select a valid operation';
                    break;
            }
        } catch (error) {
            result = 'Error: ' + error.message;
        }
        setOutput(result);
    }

    return (
        <div className={styles.container}>
            <h2>🔢 Number Utilities – Part 1</h2>
            <input
                type='string'
                placeholder='Enter a number or numeric string'
                value={input}
                className={styles.input}
                onChange={(e) => setInput(e.target.value)}
            />
            <div className={styles.controls}>
                <select className={styles.select}
                    value={operation}
                    onChange={(e) => setOperation(e.target.value)}>
                    <option value="--Select Operation--">Select Operation</option>
                    <option value="toFixed">toFixed(n)</option>
                    <option value="parseInt">parseInt</option>
                    <option value="parseFloat">parseFloat</option>
                    <option value="isNaN">isNaN()</option>
                    <option value="isFinite">isFinite()</option>
                    <option value="format">Format with commas</option>
                    <option value="floor">Math.floor()</option>
                    <option value="ceil">Math.ceil()</option>
                    <option value="round">Math.round()</option>
                    <option value="random">Random number (0–n)</option>
                </select>

                {showParam && (
                    <input
                        type='text'
                        value={param}
                        placeholder='Number'
                        className={styles.input}
                        onChange={(e) => setParam(e.target.value)}
                    />
                )}
            </div>
            <button className={styles.btn} onClick={handleRun}>Run</button>
            <div className={styles.output}>
                <strong>Output:</strong> {output}
            </div>
        </div>
    )
}