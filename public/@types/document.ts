export type Document = {
    states: {
        editingTitle: boolean,
        settingsOpen: boolean,
        searchOpen: boolean,
        onSearchCompletion: Binding
    },
    settings: {
        title: Prefrence & {value: string},
        showToDo: Prefrence & {value: boolean},
        showAds: Prefrence & {value: boolean},
        hour24: Prefrence & {value: boolean},
        shortDate: Prefrence & {value: boolean},
        quoteOfTheDay: Prefrence & {value: boolean},
        backgroundType: Prefrence & {value: "standard" | "chaos" | "custom"},  //standard, chaos, custom
        firstTime: Prefrence & {value: "invisible"}
    },
    powertools: {
        search_engine: "duckduckgo" | "google" | "escosia",
        powerbinds: Binding[]
    }
}

export type Prefrence = {
    value: string | boolean,
    desc: string,
    type: "input" | "toggle" | "list"
}

export type Binding = {
    bind: string,
    title: string,
    desc: string,
    action: Function
}

export type DocumentContextType = {
    documentSettings: Document,
    setDocumentSettings: Function
}

export type DocumentFeaturesContextType = {
    todo: any[]
}