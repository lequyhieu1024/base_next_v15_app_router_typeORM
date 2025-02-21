import {ReactNode} from "react";
import {ToastContainer} from "react-toastify";

export default function layout({children} : { children: ReactNode}) {
    return (
            <html lang="en">
            <head>
                <title>Admin</title>
            </head>
            <body>
                <header>
                    <h1>HEADER</h1>
                </header>
                <main className="page-body">
                    <div className="container-fluid">
                        {/*Extend Here*/}
                        {children}
                        <ToastContainer/>
                    </div>
                    <footer>
                        <h1>FOOTER</h1>
                    </footer>
                </main>
            </body>
            </html>
    )
}