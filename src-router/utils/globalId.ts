// src-router/globalId.ts
let currentId = -1;

export function getNextId(): number {
    return currentId--;
}