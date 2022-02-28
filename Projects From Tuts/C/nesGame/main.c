#include <stdio.h>
#include <windows.h>
#include "./main.h"

INT WINAPI WinMain(HINSTANCE Instance, HINSTANCE PrevInstance, PSTR CommandLine, INT CmdShow)
{
    UNREFERENCED_PARAMETER(PrevInstance);
    UNREFERENCED_PARAMETER(CommandLine);
    UNREFERENCED_PARAMETER(CmdShow);

    if (CreateMainGameWindow() != ERROR_SUCCESS)
    {
        goto Exit;
    }

    MSG Message = {0};

    while (GetMessageA(&Message, NULL, 0,0) >0)
    {
        TranslateMessage(&Message);
        DispatchMessageA(&Message);
    }
Exit:
    return(0);
}


LRESULT CALLBACK MainWndowProc(HWND WindowHandle, UINT Message, WPARAM WParam, LPARAM lParam)
{ 
    LRESULT Result = 0;

    switch (Message) 
    { 
        case WM_CLOSE:
        {
            PostQuitMessage(0);
        }
        default: 
        {
            Result = DefWindowProcA(WindowHandle, Message, WParam, lParam); 
        }
    } 
    return(Result); 
} 

DWORD CreateMainGameWindow(void)
{
    DWORD Result = ERROR_SUCCESS;

     WNDCLASSEXA WindowClass = { 0 };
    HWND WindowHandle;

    WindowClass.cbSize        = sizeof(WNDCLASSEXA);
    WindowClass.style         = 0;
    WindowClass.lpfnWndProc   = MainWndowProc;
    WindowClass.cbClsExtra    = 0;
    WindowClass.cbWndExtra    = 0;
    WindowClass.hInstance     = GetModuleHandleA(NULL);
    WindowClass.hIcon         = LoadIconA(NULL, IDI_APPLICATION);
    WindowClass.hIconSm       = LoadIcon(NULL, IDI_APPLICATION);
    WindowClass.hCursor       = LoadCursor(NULL, IDC_ARROW);
    WindowClass.hbrBackground = (HBRUSH)(COLOR_WINDOW+1);
    WindowClass.lpszMenuName  = NULL;
    WindowClass.lpszClassName = GAME_NAME;
    
    if(RegisterClassEx(&WindowClass) == 0)
    {
        Result = GetLastError();

        MessageBoxA(NULL, "Window Registration Failed!", "Error!",
            MB_ICONEXCLAMATION | MB_OK);
        
        goto Exit;
    }

    WindowHandle = CreateWindowExA(  WS_EX_CLIENTEDGE, WindowClass.lpszClassName, GAME_NAME, WS_OVERLAPPEDWINDOW | WS_VISIBLE, CW_USEDEFAULT, CW_USEDEFAULT, 240, 120,  NULL, NULL, GetModuleHandleA(NULL), NULL);

    if(WindowHandle == NULL)
    {
        Result = GetLastError();

        MessageBox(NULL, "Window Creation Failed!", "Error!",
            MB_ICONEXCLAMATION | MB_OK);
        
        goto Exit;
    }

Exit: 
    return(Result);
}