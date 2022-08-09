import './SideNav.css'

export default function SideNav({headers}) {
  return (
    <nav class="sidenav">
      <ul>
        {
          headers.map((header) => 
            <li>{header}</li>
          )
        }
      </ul>
    </nav>
  );
}