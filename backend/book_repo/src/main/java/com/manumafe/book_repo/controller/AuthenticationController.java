package com.manumafe.book_repo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.manumafe.book_repo.exceptions.LoginException;
import com.manumafe.book_repo.exceptions.RegistrationException;
import com.manumafe.book_repo.model.ApiResponse;
import com.manumafe.book_repo.model.AuthenticationRequest;
import com.manumafe.book_repo.model.RegisterRequest;
import com.manumafe.book_repo.service.AuthenticationService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        try {
            return ResponseEntity.ok(authenticationService.register(request));
        } catch (RegistrationException e) {
            ApiResponse apiResponse = e.getApiResponse();
            return ResponseEntity.status(HttpStatus.CONFLICT).body(apiResponse.getMessage());
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest request) {
        try {
            return ResponseEntity.ok(authenticationService.authenticate(request));
        } catch (LoginException e) {
            ApiResponse apiResponse = e.getApiResponse();
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(apiResponse.getMessage());
        }
    }
}
