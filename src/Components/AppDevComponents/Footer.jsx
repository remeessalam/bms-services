import { Facebook, Dribbble, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { logo } from "../../pages/AppDevPages/constant";
const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-16  border-t border-slate-400">
      <div className="absolute bottom-0 right-0 w-28 h-1/2 bg-gradient-to-br from-[#913f27] to-[#aa794a] rounded-full blur-3xl" />{" "}
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-start gap-2">
            <img src={logo} alt="logo" className="h-[5rem] object-contain" />

            <div className="flex gap-4">
              <Link to="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link to="#" className="hover:text-primary transition-colors">
                <Dribbble className="w-5 h-5" />
              </Link>
              <Link to="#" className="hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link to="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:items-end">
            <div>
              <h3 className="text-lg font-semibold mb-6">CONTACT</h3>
              <address className="not-italic">
                <p className="mb-4">
                  Office number 309, Ambadeep building- 3rd floor, Kg marg
                  Connaugt Place, Delhi 110001, India
                </p>
                <Link to="#" className="block mb-2 hover:text-gray-300">
                  Hello@webfolio.com
                </Link>
                <Link href="#" className="text-primary hover:text-[#ff8814]">
                  +2 456 (343) 24 45
                </Link>
              </address>
            </div>
          </div>

          <div className="flex flex-col lg:items-end">
            <div className="">
              <h3 className="text-lg font-semibold mb-6">USEFUL LINKS</h3>
              <nav>
                <ul className="space-y-3">
                  <li>
                    <Link to="#" className="hover:text-gray-300">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-gray-300">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-gray-300">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-gray-300">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* <div> */}
          {/* <h3 className="text-lg font-semibold mb-6">NEWSLETTER</h3>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 bg-transparent border-b border-white/20 focus:border-white outline-none py-2"
              />
              <button
                type="submit"
                className="p-2 hover:text-primary transition-colors"
                aria-label="Subscribe to newsletter"
              >
                <Send className="w-5 h-5" />
              </button>
            </form> */}

          {/* <div className="flex gap-4">
              <Link to="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link to="#" className="hover:text-primary transition-colors">
                <Dribbble className="w-5 h-5" />
              </Link>
              <Link to="#" className="hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link to="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
