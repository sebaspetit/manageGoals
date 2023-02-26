
function Principal({ children }) {
    return (
      <>
        <sidenav>
            <a href="/lista">lista</a>
            <a href="/crear">crear</a>
            <a href="/hola">saludo</a>
        </sidenav>
        <main>
            {children}
        </main>
      </>
    );
  }
  
  export default Principal;