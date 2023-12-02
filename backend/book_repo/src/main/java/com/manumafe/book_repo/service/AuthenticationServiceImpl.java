package com.manumafe.book_repo.service;

import java.util.Optional;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.manumafe.book_repo.model.AuthenticationRequest;
import com.manumafe.book_repo.model.AuthenticationResponse;
import com.manumafe.book_repo.model.RegisterRequest;
import com.manumafe.book_repo.model.User;
import com.manumafe.book_repo.model.UserRole;
import com.manumafe.book_repo.repository.UserRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                .fullname(request.getFullname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(UserRole.USER)
                .build();

        Optional<User> checkUseruser = userRepository.findByEmail(request.getEmail());

        if (checkUseruser.isPresent()) {
            return AuthenticationResponse.builder()
                    .status(AuthenticationResponse.AuthenticationStatus.EMAIL_ALREADY_REGISTERED)
                    .build();
        }

        userRepository.save(user);

        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .status(AuthenticationResponse.AuthenticationStatus.SUCCESS)
                .build();
    }

    @Override
    public AuthenticationResponse authenticate(AuthenticationRequest request) {

        Optional<User> user = userRepository.findByEmail(request.getEmail());
        if (!user.isPresent()) {
            return AuthenticationResponse.builder()
                    .status(AuthenticationResponse.AuthenticationStatus.USER_NOT_REGISTERED)
                    .build();
        }

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()));
        } catch (Exception e) {
            return AuthenticationResponse.builder()
                    .status(AuthenticationResponse.AuthenticationStatus.INCORRECT_PASSWORD)
                    .build();
        }

        var jwtToken = jwtService.generateToken(user.get());

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .status(AuthenticationResponse.AuthenticationStatus.SUCCESS)
                .build();
    }
}
