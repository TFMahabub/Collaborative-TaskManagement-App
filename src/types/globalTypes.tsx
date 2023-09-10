import React from "react";
export type EventType = React.ChangeEvent<HTMLInputElement>;
export type FormEventType = React.FormEvent<HTMLFormElement>;
export type EmptyObjectType = Record<PropertyKey, never>;
export type PriorityType = "low" | "medium" | "high";
export type StatusType = "inProgress" | "complete";
