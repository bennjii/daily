export type Document = {
    states: {
        editingTitle: boolean,
        settingsOpen: boolean,
        searchOpen: boolean,
        onSearchCompletion: Binding
    },
    settings: {
        title: string,
        showToDo: boolean,
        showAds: boolean,
        hour24: boolean,
        shortDate: boolean,
        quoteOfTheDay: boolean,
        backgroundType: "standard" | "chaos" | "custom",  //standard, chaos, custom
    },
    powertools: {
        search_engine: "duckduckgo" | "google" | "escosia",
        powerbinds: Binding[]
    }
}

export type Binding = {
    bind: string,
    title: string,
    action: Function
}