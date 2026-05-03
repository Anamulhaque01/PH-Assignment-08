import { auth } from "@/lib/auth"; // Imports your tutor's auth config
import { toNextJsHandler } from "better-auth/next-js";

// This handles all login/register/logout requests automatically
export const { GET, POST } = toNextJsHandler(auth);