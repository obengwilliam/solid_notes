type employee = {
  name: string
}

interface IhttpClient {
  get(): Promise<employee[]>
  find(): void
}

const httpClient = <IhttpClient>{
  get (): Promise<employee[]> {
    return Promise.resolve([
      { name: 'obeng' },
      { name: 'william' },
      { name: 'william' }
    ])
  }
}

const ui = {
  getElementByID () {},
  appendToBody (err: string): void {
    console.error(err)
  }
}

const removeDuplicates = (): employee[] => {
  return [{ name: 'william' }, { name: 'obeng' }]
}

const showError = (error: string): void => {
  ui.appendToBody(error)
}

const handleError = (err, msg) => {
  console.error(err)
}

async function filterEmployees (httpClient: object): employee[] {
  const employess = await httpClient.get('/employess').catch(handleError)
  return employess
}

const employess = filterEmployees(httpClient)
displayEmployees(employess)
