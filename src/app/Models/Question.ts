import { Answer } from "./Answer";

export interface Question{
    index: number,
    text: string,
    answers: Answer[],
    isSelected: boolean,
    imageUrl: string
}