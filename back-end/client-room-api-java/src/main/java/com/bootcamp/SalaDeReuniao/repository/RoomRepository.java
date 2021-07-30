package com.bootcamp.SalaDeReuniao.repository;

import com.bootcamp.SalaDeReuniao.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<Room,Long>{

}
