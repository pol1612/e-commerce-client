import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route index element={<DevSupport ComponentPreviews={ComponentPreviews}
                                                  useInitialHook={useInitial}
                >
                    <App/>
                </DevSupport>}/>
            </Routes>
        </Router>
    </React.StrictMode>
)
