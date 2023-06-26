export interface Project {
    project_name: string,
    risk_level: string,
    date: string,
    levels: {high: number; medium: number},
}
