import {clsx, type ClassValue} from "clsx";
import { twMerge } from "tailwind-merge";

export function classNames(...classValue : ClassValue[]){
    return twMerge(clsx(classValue));
}