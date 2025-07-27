# PassItOn - Campus Item Sharing Platform

A web-based platform that connects departing university students with incoming students, enabling the sharing and handover of useful items during hostel transitions. This helps reduce waste, saves money for students, and builds community connections.

## Features

- **Item Listing**: Departing students can upload items they want to give away
- **Item Discovery**: Browse and search available items by category, condition, and location
- **User Management**: Secure authentication and user profiles
- **Item Management**: Track posted items and their status
- **History Tracking**: View past transactions and activities
- **Responsive Design**: Mobile-friendly interface for easy access

## Technology Stack

- **Frontend**: HTML5, CSS3, JSF 2.x, PrimeFaces
- **Backend**: Java EJB (Enterprise JavaBeans)
- **Security**: Apache Shiro
- **Database**: SQL Server
- **Application Server**: Apache TomEE Plume
- **Java Version**: 1.8

## Prerequisites

- Java JDK 1.8
- Apache TomEE Plume 7.x or higher
- SQL Server (Express/Standard/Enterprise)
- Maven 3.x (for dependency management)

## Installation & Setup

### 1. Database Setup
```sql
-- Create database
CREATE DATABASE PassItOnDB;

-- Configure connection settings in your datasource
```

### 2. Clone Repository
```bash
git clone https://github.com/yourusername/passiton.git
cd passiton
```

### 3. Configure Database Connection
Update the database connection settings in:
- `META-INF/persistence.xml`
- `WEB-INF/web.xml` (if using container-managed datasource)

### 4. Build and Deploy
```bash
# Build the project
mvn clean package

# Deploy the WAR file to TomEE webapps directory
cp target/passiton.war $TOMEE_HOME/webapps/
```

### 5. Start Server
```bash
cd $TOMEE_HOME/bin
./startup.sh  # Linux/Mac
startup.bat   # Windows
```

Access the application at: `http://localhost:8080/passiton`

## Project Structure

```
src/
├── main/
│   ├── java/
│   │   ├── beans/          # JSF Managed Beans
│   │   ├── ejb/            # Enterprise JavaBeans
│   │   ├── entities/       # JPA Entities
│   │   ├── security/       # Apache Shiro Security
│   │   └── utils/          # Utility classes
│   ├── resources/
│   │   └── META-INF/
│   │       └── persistence.xml
│   └── webapp/
│       ├── WEB-INF/
│       │   ├── web.xml
│       │   ├── faces-config.xml
│       │   └── shiro.ini
│       ├── resources/      # CSS, JS, Images
│       └── *.xhtml         # JSF Views
```

## Key Components

### Entities
- **User**: Student information and authentication
- **Item**: Items available for sharing
- **Category**: Item categorization
- **Transaction**: Item handover records

### Main Features
- **User Authentication**: Login/Signup with matriculation number
- **Item CRUD Operations**: Create, read, update, delete items
- **Search & Filter**: Find items by various criteria
- **Image Upload**: Support for item photos
- **Status Tracking**: Monitor item availability and handover status

## Security

The application uses Apache Shiro for:
- Authentication and authorization
- Session management
- Password encryption
- Role-based access control

## Database Schema

Key tables:
- `users` - User accounts and profiles
- `items` - Available items for sharing
- `categories` - Item categories
- `transactions` - Item handover history
- `images` - Item photos

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## Development Setup

### IDE Configuration
- Import as Maven project
- Configure TomEE server in your IDE
- Set up hot deployment for faster development

### Environment Configuration
- Development: `application-dev.properties`
- Production: `application-prod.properties`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team

## Acknowledgments

- Built as part of a software engineering assignment
- Inspired by the need to reduce waste in university hostels
- Thanks to the open-source community for the excellent frameworks used

---

**PassItOn** - Connecting students, reducing waste, building community.
