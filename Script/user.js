(function (core) 
{
    class User
    {
        // getters and setters
        get DisplayName()
        {
            return this.m_displayName;
        }
        
        set DisplayName(name)
        {
            this.m_displayName = name;
        }

        get DisplayFirstName()
        {
            return this.m_displayFirstName;
        }
        
        set DisplayFirstName(Fname)
        {
            this.m_displayFirstName = Fname;
        }

        get DisplayLastName()
        {
            return this.m_displayLastName;
        }
        
        set DisplayLastName(Lname)
        {
            this.m_displayLastName = Lname;
        }

        

        get EmailAddress()
        {
            return this.m_emailAddress;
        }

        set EmailAddress(email_address)
        {
            this.m_emailAddress = email_address;
        }

        get Username()
        {
            return this.m_username;
        }

        set Username(username)
        {
            this.m_username = username;
        }

        get Password()
        {
            return this.m_password;
        }

        set Password(password)
        {
            this.m_password = password;
        }

        // constructor
        constructor(displayName = "", emailAddress = "", username = "", password = "")
        {
            this.DisplayName = displayName;
            this.EmailAddress = emailAddress;
            this.Username = username;
            this.Password = password;
        }

        // method overrides
        toString()
        {
            return `Display Name    : ${this.DisplayName} \nEmail Address : ${this.EmailAddress} \nUsername : ${this.Username}`;
        }

        // utility methods
        toJSON()
        {
            return {
                "DisplayName": this.DisplayName,
                "EmailAddress": this.EmailAddress,
                "Username": this.Username
            }
        }

        fromJSON(data)
        {
            this.DisplayName = data.DisplayName;
            this.EmailAddress = data.EmailAddress;
            this.Username = data.Username;
            this.Password = data.Password;
        }
        

        userName()
        {
            return `${this.Username}`;
        }
        
        serialize()
        {
            if(this.DisplayName !== "" && this.EmailAddress !== "" && this.Username !== "")
            {
                return `${this.DisplayName},${this.EmailAddress},${this.Username}`;
            }
            else
            {
                console.error("One or more properties of the User is empty");
                return null;
            }
        }

        SetRegistra(first, last, email, password)
        {
            this.DisplayFirstName = first;
            this.DisplayLastName= last;
            this.EmailAddress = email;
            this.Password = password;
        }

        displayregister()
        {
            if(this.DisplayFirstName !== "" && this.DisplayLastName !== "" && this.EmailAddress !== "" && this.password !== "")
            {
                return `${this.DisplayFirstName},${this.DisplayFirstName},${this.EmailAddress},${this.password}`;
            }
            else
            {
                console.error("One or more properties of the User is empty");
                return null;
            }
        }

        deserialize(data)
        {
            let propertyArray = data.split(",");
            this.DisplayName = propertyArray[0];
            this.EmailAddress = propertyArray[1];
            this.Username = propertyArray[2];
        }
    }

    core.User = User;

})(core || (core={}));