export type Document = {
    states: {
        editingTitle: boolean,
        editingJottTitle: boolean,

        settingsOpen: boolean,
        searchOpen: boolean,
        
        assignedPowerbinds: boolean,
        onSearchCompletion: Binding,

        activeJott: number
    },
    storage: {
        todo: TodoItem[],
        jottit: JottitPage[]
    }
    settings: {
        title: Prefrence & {value: string},
        jottit: Prefrence & {value: boolean}
        theme: Prefrence & {value: string},
        showToDo: Prefrence & {value: boolean},
        showAds: Prefrence & {value: boolean},
        hour24: Prefrence & {value: boolean},
        shortDate: Prefrence & {value: boolean},
        quoteOfTheDay: Prefrence & {value: boolean},
        backgroundImage: Prefrence & {value: "static" | "color" | "dynamic"}
        backgroundType: Prefrence & {value: "standard" | "chaos" | "custom"},  //standard, chaos, custom
        firstTime: Prefrence & {value: boolean},
    },
    powertools: {
        search_engine: "duckduckgo" | "google" | "escosia",
        powerbinds: Binding[]
    }
}

export type User = {
    username: string,
    creation_date: number
}

export type Prefrence = {
    value: string | boolean,
    desc: string,
    type: "input" | "toggle" | "list" | "invisible"
}

export type Binding = {
    bind: string,
    title: string,
    desc: string,
    action: Function
}

export type DocumentContextType = {
    documentSettings: Document,
    setDocumentSettings: (doc: Document) => void,

    saveSettings: Function,
    saveStorageItems: Function,

    userData: User,
    setUserData: Function,

    todo: TodoItem[],
    jottit: JottitPage[],

    setTodo: Function,
    setJottit: Function,

    backgroundStats: any
}

export type TodoItem = {
    completed: boolean
    editable: boolean, 
    title: string,
}

export type JottitPage = {
    title: string,
    content: string
}

export type DocumentFeaturesContextType = {
    todo: any[]
}