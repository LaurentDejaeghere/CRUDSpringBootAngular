/**
 * 
 */
package perso.springbootdemo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import perso.springbootdemo.model.Tutorial;

/**
 * @author laurent.dejaeghere
 *
 */

// extends JpaRepository<Class, Type of Class Id> enable the use of JpaRepository’s methods : 
// save(), findOne(), findById(), findAll(), count(), delete(), deleteById()… without implementing these methods.
public interface TutorialRepository extends JpaRepository<Tutorial, Long>{

	List<Tutorial> findByPublished(boolean published);
	List<Tutorial> findByTitleContaining(String title);
}
