import { useEffect, useState } from 'react'

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
        const response = await fetch('https://Api.example,com/data');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
        
        } catch (error) {
            setError(error as string);
          
        }
        finally {
            setLoading(false);
    }
  };
    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching data: {error}</div>;
    }

    return (
      <div>
        <h1>all good</h1>
        <div>{JSON.stringify(data)}</div>
      </div>
    );
  }

export default App 

/*function App() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.example.com/data');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error as string);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching data: {error}</div>;
    }

    return (
        <div>
            <h1>Data fetched successfully</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default App;*/
