(function(core)
{
    class Router
    {
        // public property

        /**
         * @returns {string}
         */
        get ActiveLink()
        {
            return this.m_activeLink;
        }

        /**
         * @param {String} link
         * @returns {void}
         */
        set ActiveLink(link)
        {
            this.m_activeLink = link;
        }

        // constructor

        /**
         * Creates an instance of the router
         * 
         * @constructor
         */
        constructor()
        {
            this.ActiveLink = "";
        }

        // public methods

        /**
         * This methods adds new route to the Routing Table
         * 
         * @param {String} route
         * @returns {void} 
         */
        Add(route)
        {
            this.m_routingTable.push(route);
        }

        /**
         * This method replaces the refernce for the Routing Table with a new one
         * 
         * @param {string[]} routingTable 
         * @returns {void}
         */
        AddTable(routingTable)
        {
            this.m_routingTable = routingTable;
        }

        /**
         * This method finds the index of the route in the Routing Table
         * 
         * @param {String} route 
         * @returns {number}
         */
        Find(route)
        {
            return this.m_routingTable.indexOf(route)
        }

        /**
         * This method removes a Route from the Routing Table.
         * 
         * @param {String} route 
         * @returns {boolean}
         */
        Remove(route)
        {
            if(this.Find(route) > -1)
            {
                // remove the route
                this.m_routingTable.splice(this.Find(route), 1);

                return true;
            }

            return false;
        }

        // public override methods

        /**
         * This method returns the routing Table
         * 
         * @override
         * @returns {string}
         */
        toString()
        {
            return this.m_routingTable.toString();
        }
    }

    core.Router = Router;

})(core || (core = {}));

let router = new core.Router();

router.AddTable([
    "/",
    "/home",
    "/about",
    "/services",
    "/contact",
    "/contact-list",
    "/products",
    "/register",
    "/login",
    "/edit",
]);

let route = location.pathname;

// if rout is found in the Routing Table
router.ActiveLink = (router.Find(route) > -1) ? (route == "/") ? "home" : route.substring(1) : "404" ;