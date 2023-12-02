package com.manumafe.book_repo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.manumafe.book_repo.model.AuthenticationRequest;
import com.manumafe.book_repo.model.AuthenticationResponse;
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
        AuthenticationResponse response = authenticationService.register(request);

        if (response.getStatus().equals(AuthenticationResponse.AuthenticationStatus.SUCCESS)) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        }

    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest request) {
        AuthenticationResponse response = authenticationService.authenticate(request);
        if (response.getStatus().equals(AuthenticationResponse.AuthenticationStatus.INCORRECT_PASSWORD)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        } else if (response.getStatus().equals(AuthenticationResponse.AuthenticationStatus.USER_NOT_REGISTERED)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        } else {
            return ResponseEntity.ok(response);
        }
    }
}
