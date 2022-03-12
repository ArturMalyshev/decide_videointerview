package first_try.server.services;

import first_try.server.repositories.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class AdminService {
  @Autowired private AdminRepository adminRepository;
}
