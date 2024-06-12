import { writable } from "svelte/store";
import type { ApiClient } from "@twurple/api";

export const apiClient = writable<ApiClient>();

export const testText = writable<string>();