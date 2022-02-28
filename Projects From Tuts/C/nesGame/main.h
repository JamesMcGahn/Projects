#pragma once

#define GAME_NAME "NES GAME"

LRESULT CALLBACK MainWndowProc(HWND WindowHandle, UINT Message, WPARAM WParam, LPARAM lParam);

DWORD CreateMainGameWindow(void);