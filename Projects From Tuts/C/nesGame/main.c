#include <stdio.h>
#include <windows.h>


LRESULT CALLBACK MainWndowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam);

INT WINAPI WinMain(HINSTANCE Instance, HINSTANCE PrevInstance, PSTR CommandLine, INT CmdShow)
{
    UNREFERENCED_PARAMETER(PrevInstance);
    UNREFERENCED_PARAMETER(CommandLine);
    UNREFERENCED_PARAMETER(CmdShow);

    WNDCLASSEXA WindowClass = { 0 };
    HWND WindowHandle;

    WindowClass.cbSize        = sizeof(WNDCLASSEXA);
    WindowClass.style         = 0;
    WindowClass.lpfnWndProc   = MainWndowProc;
    WindowClass.cbClsExtra    = 0;
    WindowClass.cbWndExtra    = 0;
    WindowClass.hInstance     = Instance;
    WindowClass.hIcon         = LoadIconA(NULL, IDI_APPLICATION);
    WindowClass.hCursor       = LoadCursor(NULL, IDC_ARROW);
    WindowClass.hbrBackground = (HBRUSH)(COLOR_WINDOW+1);
    WindowClass.lpszMenuName  = NULL;
    WindowClass.lpszClassName = "NES_WINDOWCLASS";
    WindowClass.hIconSm       = LoadIcon(NULL, IDI_APPLICATION);

    if(RegisterClassEx(&WindowClass) == 0)
    {
        MessageBox(NULL, "Window Registration Failed!", "Error!",
            MB_ICONEXCLAMATION | MB_OK);
        return 0;
    }

    WindowHandle = CreateWindowExA(  WS_EX_CLIENTEDGE, WindowClass.lpszClassName, "NES GAME", WS_OVERLAPPEDWINDOW, CW_USEDEFAULT, CW_USEDEFAULT, 240, 120,  NULL, NULL, Instance, NULL);

    if(WindowHandle == NULL)
    {
        MessageBox(NULL, "Window Creation Failed!", "Error!",
            MB_ICONEXCLAMATION | MB_OK);
        return 0;
    }

    ShowWindow(WindowHandle, TRUE);

    MSG Message = {0};
    while (GetMessageA(&Message, NULL, 0,0) >0)
    {
        TranslateMessage(&Message);
        DispatchMessageA(&Message);
    }

    return 0;
}


LRESULT CALLBACK MainWndowProc(
    HWND hwnd,        // handle to window
    UINT uMsg,        // message identifier
    WPARAM wParam,    // first message parameter
    LPARAM lParam)    // second message parameter
{ 
 
    switch (uMsg) 
    { 
        case WM_CREATE: 
            // Initialize the window. 
            return 0; 
 
        case WM_PAINT: 
            // Paint the window's client area. 
            return 0; 
 
        case WM_SIZE: 
            // Set the size and position of the window. 
            return 0; 
 
        case WM_DESTROY: 
            // Clean up window-specific data objects. 
            return 0; 
 
        // 
        // Process other messages. 
        // 
 
        default: 
            return DefWindowProc(hwnd, uMsg, wParam, lParam); 
    } 
    return 0; 
} 