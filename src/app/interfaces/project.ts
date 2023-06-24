export interface Project {
    _id: string
    project_name: string,
    scan_date: Date,
    risk_level: string,
    sast_results: any[],
    sca_results: any[],
    iac_results: any[],
    vulnerability_list: any[]
}
