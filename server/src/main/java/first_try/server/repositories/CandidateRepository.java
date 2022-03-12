package first_try.server.repositories;

import first_try.server.entities.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CandidateRepository extends JpaRepository<Admin, Long> {

}
