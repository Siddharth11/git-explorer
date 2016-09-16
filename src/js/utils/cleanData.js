const returningObject = el => {
    return {
        key: el.id,
        name: el.name,
        desc: el.description,
        stars: el.stargazers_count,
        forks: el.forks,
        issues: el.open_issues_count,
        url: el.html_url
    }
}

const cleanData = arr => arr.map(el => returningObject(el))

export default cleanData
