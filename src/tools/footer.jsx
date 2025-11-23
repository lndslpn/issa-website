import '../index.css';
import '../App.css'; 

export default function Footer() {

  return (
    <footer className="bg-offwhite py-6">
        <div className="container mx-auto px-6 text-center bg-offwhite">
            <p className="text-sm text-greenhead">
            Copyright &copy; {new Date().getFullYear()} Indigenous in STEM Student Association. All rights reserved.
            </p>
        </div>
    </footer>
  );
}