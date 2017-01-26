/*---------------------------------------------------------------------------------------------
*  Copyright (c) Microsoft Corporation. All rights reserved.
*  Licensed under the MIT License. See License.txt in the project root for license information.
*--------------------------------------------------------------------------------------------*/
"use strict";

export interface ITfvc {
    path: string;
    version: string;
    url: string;
}

export interface IWorkspace {
    name: string;
    server: string;
    computer?: string;
    owner?: string;
    comment?: string;
    //List<Mapping> mappings;
}

export interface IFileStatus {
    x: string;
    y: string;
    path: string;
    rename?: string;
}

export interface IExecutionResult {
    exitCode: number;
    stdout: string;
    stderr: string;
}

export interface ITfvcErrorData {
    error?: Error;
    message?: string;
    stdout?: string;
    stderr?: string;
    exitCode?: number;
    tfvcErrorCode?: string;
    tfvcCommand?: string;
}

export interface ITfvcCommand<T> {
    GetArguments(): string[];
    GetOptions(): any;
    ParseOutput(executionResult: IExecutionResult): T;
}
