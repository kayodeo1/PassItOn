
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Stateless
public class UserService {
    @PersistenceContext
    private EntityManager em;

    public boolean validateLogin(String matricNumber, String password) {
        // Implement login validation (e.g., query database, check hashed password)
        return true; // Placeholder
    }

    public void createUser(String matricNumber, String firstName, String lastName, String password) {
        // Implement user creation (e.g., hash password, save to database)
    }
}