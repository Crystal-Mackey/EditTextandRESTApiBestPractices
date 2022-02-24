

const BestPractices = () => {
    return(
        <div className="practices">
            <h1>REST API Best Practices</h1>
            <ol>
                <li> Use JSON as the format for sending and receiving data</li>
                <li>Use nouns instead of verbs in Endpoints</li>
                <li>Name Collections with Plural Nouns</li>
                <li>Use status codes in Error handling</li>
                <li>Use Nesiting on Endpoints to show relationships</li>
                <li>Use Filtering, sorting, and pagination to revieve requested Data</li>
                <li>Use SSL (Secure Socket Layer) for Security</li>
                <li>Be Clear with versioning</li>
                <li>Provide accurate API documentation</li>
            </ol>
        </div>
    )
}

export default BestPractices;