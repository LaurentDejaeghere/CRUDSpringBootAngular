/**
 * 
 */
package perso.springbootdemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import perso.springbootdemo.model.Employee;

/**
 * @author laurent.dejaeghere
 *
 */
//extends JpaRepository<Class, Type of Class Id> enable the use of JpaRepository’s methods : 
//save(), findOne(), findById(), findAll(), count(), delete(), deleteById()… without implementing these methods.
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
