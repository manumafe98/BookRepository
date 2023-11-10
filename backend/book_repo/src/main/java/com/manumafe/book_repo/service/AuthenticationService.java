package com.manumafe.book_repo.service;

import com.manumafe.book_repo.model.AuthenticationRequest;
import com.manumafe.book_repo.model.AuthenticationResponse;
import com.manumafe.book_repo.model.RegisterRequest;

public interface AuthenticationService {
    public AuthenticationResponse register(RegisterRequest request);
    public AuthenticationResponse authenticate(AuthenticationRequest request);
}
